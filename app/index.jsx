var React = require('react');
var ReactDOM = require('react-dom');
var Griddle = require('griddle-react');

import topo from './topo.json';
//import exampleMetadata from './exampleMetadata.json';
//import data from './data.json';
import metadata from './metadata.json';
//import './main.css';
import './test.css';

var columns = [
  "scraperClassName",
  "Search Terms",
  "Javascript",
  "Price Selector",
  "Marketplace/CSE",
  "Multiple Variations"
]

// ReactDOM.render(<Griddle results={data} enableInfiniteScroll={true} bodyHeight={400} showFilter={true}
//   columnMetadata={exampleMetadata} showFilter={true} showSettings={true} columns={["name", "city", "state", "country"]}/>, document.getElementById('main'));

ReactDOM.render(<Griddle results={topo} enableInfiniteScroll={true} bodyHeight={530} 
  useFixedHeader={true} useGriddleStyles={false} columnMetadata={metadata} showSettings={true} 
  columns={columns} showFilter={true}/>, document.getElementById('main'));