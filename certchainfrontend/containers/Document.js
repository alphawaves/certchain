import React from 'react'
import {Redirect} from 'react-router-dom'

class Document extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			clicked: false
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		console.log('clicked', this.props.id)
		this.setState({
			clicked: true
		})
	}

 	render() {
 		if(this.state.clicked)
 			return <Redirect push to={{
 				pathname: `/document/${this.props.id}`,
 				state: {
 					id: this.props.id,
 					url: this.props.url,
 					name: this.props.name,
 					issuer: this.props.issuer,
 					receiver: this.props.receiver,
 					date: this.props.date
 				}
 			}}
 			/>

		return(
			<div onClick={this.handleClick} style={{height:200, width:200, margin:20}}>
				<img style={{maxHeight:200, maxWidth:200}}src={this.props.url} />
				<h5>{this.props.name}</h5>
 			</div>
		)
	}
}

export default Document