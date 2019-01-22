import React from 'react'
import Document from './Document'

class DocumentGrid extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const documentData = this.props.documentData
		const documents = documentData.map((data) => <Document id={data.id} name={data.name} url={data.url} issuer={data.issuer}
			receiver={data.receiver} />)
		return(
			<div className="document-grid">
				{documents}
			</div>
		)
	}
}

export default DocumentGrid