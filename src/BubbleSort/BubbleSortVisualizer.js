import React, { Component } from "react";
import styles from "./BubbleSortVisualizer";

class BubbleSortVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    };
  }

  componentDidMount() {
    this.generateArray();
  }

  bubbleSort() {
    let temp;
    const { arr } = this.state;
    var swap;
    const theDiv = document.getElementsByClassName("bubble");
    do {
      swap = false;
      for (let i = 0; i < this.state.arr.length - 1; i++) {
        setInterval(() => {
          if (arr[i] > arr[i + 1]) {
            // if 4 > 2

            temp = arr[i + 1]; // temp = 2

            arr[i + 1] = arr[i]; // 2 = 4

            arr[i] = temp;

            this.setState({
              arr: arr
            });
            console.log(this.state.arr);
            swap = true;
          }
        }, 100);
      }
    } while (swap);
  }

  generateArray() {
    var a = [];
    for (var i = 0; i < 100; i++) {
      var b = Math.floor(Math.random() * 500 + 1);
      a.push(b);
    }
    console.log(a);
    this.setState({
      arr: a
    });
  }
  render() {
    return (
      <div>
        <div style={{ display: "inline-flex", width: "90%", height: "670px" }}>
          {this.state.arr.map((item, i) => (
            <div
              className="bubble"
              style={{
                backgroundColor: "pink",
                marginInlineEnd: "2px",
                height: `${item}px`,
                width: "10px"
              }}
              key={i}
            ></div>
          ))}
        </div>

        <button
          className="btn btn-danger"
          onClick={this.generateArray.bind(this)}
        >
          Generate array
        </button>

        <button className="btn btn-info" onClick={this.bubbleSort.bind(this)}>
          {" "}
          Bubble Sort it!
        </button>
      </div>
    );
  }
}

export default BubbleSortVisualizer;
