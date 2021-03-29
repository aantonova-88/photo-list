import React, { Component } from 'react';
import ApiService from './api-service';

import './photos.css';

export default class Photos extends Component {
  apiService = new ApiService();

  render () {
    const { getAllPhotos } = this.apiService;

    return {
      <div>
        {getAllPhotos}
      </div>
    }
  }
  const { getAllPhotos } = this.apiService;


}
