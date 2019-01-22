import React from 'react'
import DocumentGrid from './DocumentGrid'
import PublishedDocuments from './PublishedDocuments'
import UnpublishedDocuments from './UnpublishedDocuments'

class DocumentCategory extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let documentData
		if(this.props.category === "published"){
			documentData = PublishedDocuments
		} else {
			documentData = UnpublishedDocuments
		}
		return(
			<div>
				<h1>{this.props.category} documents </h1>
				<DocumentGrid documentData={documentData} />
			</div>
		)
	}
}

export default DocumentCategory