import { useState, useEffect, useRef } from 'react';
import './App.css';
import { IssuesList } from './components/IssuesList';


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

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(prevPage => {
        return prevPage + 1;
      })
    }
  }

  useEffect(() => {
    const scrollRef = scrollListRef.current
    scrollListRef.current.addEventListener('scroll', onScroll)
    return () => scrollRef.removeEventListener('scroll', onScroll)
  }, [])

  
  return (
    <div className="appMainContainer">
      <h3 className="githubIssueHeading">GitHub Issues Page With Infinite Scroll</h3>
      <IssuesList ref={scrollListRef} issuesList={issuesList} />
      {loader && <span>Loading...</span>}
    </div>
  );
}

export default App;
