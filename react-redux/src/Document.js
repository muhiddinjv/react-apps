import React from 'react';
import Placeholder from './Placeholder';

const Document = (props) =>{
    return(
        <div>
            <Placeholder>
                <div className="ui icon header">
                    <i className="pd file outline icon"></i>
                    No documents are listed for this customer
                </div>
                <div className="ui primary button">Add Document</div>
            </Placeholder>
            <Placeholder>
                <h4 className="ui header">For your information</h4>
                <p>lorem empsum which is supposed to be a long line of text which almost never ends but for some reason it is not working. No wait. I think I know the reason. I have not installed the extension yet.</p>
            </Placeholder>
        </div>
    )
}

export default Document;