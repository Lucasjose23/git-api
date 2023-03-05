import axios from "axios";

export function handleChange(event: React.FormEvent<HTMLInputElement>, self: any) {
  self.setState({
    query: event.currentTarget.value,
  });
}

export function fetchResults(self: any) {
  const queryString = self.state.query;
  axios
    .get(`https://api.github.com/search/repositories?q=${queryString}`)
    .then((response) => {
      self.setState({
        results: response.data.items,
        total: response.data.items.length,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function handleSubmit(event: React.FormEvent<HTMLFormElement>, self: any) {
  event.preventDefault();
  fetchResults(self);
  console.log(self.state.results)
}

export function handlePageChange(event: React.FormEvent<HTMLButtonElement>, self: any) {
  const pageNumber = event.currentTarget.value;
  self.setState({ currentPage: Number(pageNumber) });
}

