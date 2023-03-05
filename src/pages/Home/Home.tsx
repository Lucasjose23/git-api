import React from "react";
import ListItem from "../../components/List-item/List-item";
import PaginationButton from "../../components/Pagination-button/Pagination-button";
import "./Home.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { IState } from "../../interfaces/IState";
import { handleChange, handlePageChange, handleSubmit } from "../../API/Api";



class Home extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      query: "",
      results: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
    };
  }


  render() {
    const pageSize = this.state.pageSize;
    const total = this.state.total;
    const currentPage = this.state.currentPage;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, total - 1);
    const totalPages = Math.ceil(total / pageSize);



    return (

      <div className="container">
        <div>
          <Header></Header>
          <form onSubmit={(event) => handleSubmit(event, this)}>
            <div className="d-flex  search">
              <input
                className="search__input"
                type="text"
                value={this.state.query}
                onChange={(event) => handleChange(event, this)}
                placeholder="Search"
              />
              <input className="search__submit" type="submit" value="Search" />
            </div>
          </form>
          <div className="list">
            {this.state.results.map(
              (result: any, index: number) =>
                index >= startIndex &&
                index <= endIndex && (
                  <div key={result.id}>

                    <ListItem name={result.name} owner={result.owner.login} statusName={result.private} url={result.html_url}></ListItem>
                  </div>
                )
            )}
          </div>
          <div className="Home d-flex center">
            {Array.from({ length: totalPages }, (v, k) => k + 1).map((pageNo) => (
              <button className="null-button"
                key={pageNo}
                value={pageNo}
                onClick={(event) => handlePageChange(event, this)} >

                <PaginationButton active={pageNo === currentPage}  ></PaginationButton>
              </button>
            ))}
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
