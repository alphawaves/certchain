import React from 'react'
import DocumentCategory from './DocumentCategory'


class DocumentContainer extends React.Component {
	// constructor(props) {
	// 	this.state = {
	// 		address: this.props.address
	// 	}
	// }
	render() {
		return(
			<div>
				<DocumentCategory category="published" />
				<DocumentCategory category="unpublished" />
			</div>
		)
 	}
}

export default DocumentContainer