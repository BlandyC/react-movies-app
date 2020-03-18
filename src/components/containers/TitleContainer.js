import React, { Component } from 'react'
// import { getRecipe } from '../../services/api'
import Title from '../layout/Title'

class TitleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: "React Movies App"
    };
  }

  render() {
    const { label } = this.state

    return (
      <div>
        <Title label = {label}/>
      </div>
    )
  }
}

export default TitleContainer