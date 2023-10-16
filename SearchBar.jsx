import React, { Component } from 'react';
import './SearchBar';
import axios from 'axios';
import dotenv from 'dotenv'
import { useState } from "react"
import Results from './results';

class SearchBar extends Component {

  constructor() {

    super();
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleInputChange  = this.handleInputChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.state = {
      searchTerm: '', // Initialize searchTerm in the component state
      userDiagnosis: '',
    };

  }

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSearch = () => {
    // Access the search term from the component state
    const searchTerm = this.state.searchTerm;

    // You can now call the OpenAI API here
    this.callOpenAI(searchTerm);
  }

  async callOpenAI(searchTerm) {

    const apiKey = 'API key'; 
    const url = 'https://api.openai.com/v1/chat/completions';

    const requestBody = {
      messages: [
        { 'role': 'system', 'content': "You are an intelligent assistant designed to diagnose disorders based on symptoms. A user will prompt you with a description of their symptoms, and you will provide 2-3 possible diseases, illnesses, or disorders they could have.For each possible disorder, offer some advice or treatment tips based on the disorder After diagnosing them, the user may want to ask more questions about their disorder, or clarify more information. The user already knows that you are an AI assistant and that information you provide may not be accurate, there is no need to reclarify." },
        { 'role': 'user', 'content': searchTerm } // Use the search term as user input
      ],
      model: 'gpt-4',
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };

    const result = await axios.create({headers}).post(url, requestBody);
    const userDiagnosis = result.data.choices[0].message.content;
    this.setState({ userDiagnosis });
  // <Results userDiagnosis {result.data.choices[0].message.content} />
  //  alert(result.data.choices[0].message.content);
    console.log(result.data.choices[0].message.content);
   // <Results userDiagnosis={this.state.userDiagnosis} />
  // result.data.choices[0].message.content


   // alert('Here is your diagnosis: \n' +   result.data.choices[0].message.content);


  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }
  render() {
    return (
      <div>
        <div className="search-bar">        <input
          type="text"
          placeholder="Enter Symptoms"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        /> 
        <button onClick={this.handleSearch }>Search</button> 
        </div>
           
          <div className="diagnosis-box">
            {this.state.userDiagnosis && (
              <p>Diagnosis: {this.state.userDiagnosis}</p>
            )}
          </div>
        </div>
    );
  }
}

export default SearchBar;
