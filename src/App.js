import React from "react";
// import logo from "./logo.svg";
import "./App.css";
const STARTER_DATA = [
  {
    name: "Zoe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7imK5bdU_OoU2i8VmaH81t3PkPHXVK8yqHSYsWg5xy5k_-DJ&s",
    phone: "(555)555-5555",
    email: "zoe@nowhere.com",
    dob: "10/28/1992"
  },
  {
    name: "Bob",
    image: "https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg",
    phone: "(234)567-2345",
    email: "bob@nowhere.com",
    dob: "3/13/1988"
  },
  {
    name: "Ellie",
    image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/bigar-waterfall-in-romania-seen-on-a-sunny-day-george-afostovremea.jpg",
    phone: "(987)654-3214",
    email: "ellie@nowhere.com",
    dob: "7/09/1999"
  },
  {
    name: "Frank",
    image: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    phone: "(789)345-4646",
    email: "frank@nowhere.com",
    dob: "9/15/1974"
  },
  {
    name: "Mike",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwZnvpWokXgI0hYVGhH70cNrext-z-kYB8SW14F9NCVU_QqhyE",
    phone: "(123)985-7625",
    email: "mike@nowhere.com",
    dob: "7/09/1999"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };

    this.handleSortClick = this.handleSortClick.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ employees: [...STARTER_DATA] });
    });
  }

  handleSortClick() {
    console.log("I work", this.state.employees);
    const sorted = [...this.state.employees];
    sorted.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    console.log(sorted);
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Employee Directory</h1>
          <button onClick={this.handleSortClick} type="button" className="btn btn-dark">Sort Alphabetically</button>
          <table className="table">
            <tbody>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Profile Image</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DoB</th>
              </tr>
              {this.state.employees.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td>{row.name}</td>
                      <td><img alt="Profile" src={row.image}></img></td>
                      <td>{row.phone}</td>
                      <td>{row.email}</td>
                      <td>{row.dob}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
