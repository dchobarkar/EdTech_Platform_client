import React from 'react';
import { Button } from 'react-bootstrap';

import DModal from '../../../../components/DModal/DModal';

const DeleteModal = (props) => (
    <DModal
        show={props.show}
        modalhandler={props.showdeletemodal}>

        <h4>Do you really want to delete this item?</h4>
        <p>Once deleted, you can not recover this item</p>
        <Button
            variant="outline-dark"
            onClick={props.showdeletemodal}>
            Close
        </Button>

        <Button
            className="float-right"
            variant="outline-dark"
            onClick={() => props.deletecontenthandler(props.sectionid, props.contentid)}>
            Delete
        </Button>
    </DModal>
)

export default DeleteModal;