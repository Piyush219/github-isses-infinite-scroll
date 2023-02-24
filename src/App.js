import { useState, useEffect, useRef } from 'react';
import './App.css';
import { FirstRow } from './components/FirstRow/FirstRow';
import { Footer } from './components/Footer/Footer';
import { IssuesHeader } from './components/IssuesHeader/IssuesHeader';
import { IssuesList } from './components/IssuesList/IssuesList';


function App() {
  const [issuesList, setIssuesList] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const scrollListRef = useRef();

  useEffect(() => {
    setLoader(true)
    fetch(`https://api.github.com/repos/facebook/react/issues?page=${page}`)
      .then(response => response.json())
      .then(response => {
        setLoader(false)
        let tempArr = [];
        response.forEach(element => {
          tempArr.push({
            body: element.body,
            id: element.id,
            updatedAt: element.updated_at,
            title: element.title,
            labels: element.labels,
            number: element.number,
            state: element.state,
            name: element.user.login,
            url: element.html_url,
            comments: element.comments,

          })
        });
        setIssuesList(prevList => {
          return [...prevList, ...tempArr]
        });
      })
      .catch(err => {
        setLoader(false)
        console.log(err)
      })
  }, [page])


  const onScroll = () => {
    const scrollTop = scrollListRef.current.scrollTop;
    const scrollHeight = scrollListRef.current.scrollHeight;
    const clientHeight = scrollListRef.current.clientHeight;

    if (scrollTop + clientHeight  >= scrollHeight) {
      setPage(prevPage => {
        return prevPage + 1;
      })
    }
  }

  useEffect(() => {

    // Taking Refrence of the List from the Child Component 'IssuesList' and adding Scroll Event Listener on it.

    const scrollRef = scrollListRef.current
    scrollListRef.current.addEventListener('scroll', onScroll)
    return () => scrollRef.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <>
      <div>
        <IssuesHeader />
      </div>
      <div className="appMainContainer">

        {/* First Row of Issues is Static, that's why it is separated from the Issues List Component. Values are
        hardcoded in the First Row */}

        <FirstRow />
        <IssuesList ref={scrollListRef} issuesList={issuesList} />

        {/* Will show loader, till the time we get resonse from the API */}

        {loader && <div className="loader"></div>}
      </div>
      <Footer/>
    </>
  );
}

export default App;
