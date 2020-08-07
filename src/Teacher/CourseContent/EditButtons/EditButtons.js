import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CButton from '../../../customFunctions/CButton/CButton';
import VideoPlayer from '../../../customFunctions/VideoPlayer/VideoPlayer';
import EditModal from './EditModal/EditModal';
import DeleteModal from './DeleteModal/DeleteModal';

const EditButtons = React.memo(function EditButtons(props) {
    const [showDescription, setShowDescription] = useState(false)
    const [showVideo, setShowVideo] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    // Functions to toggle showdescription, video modal,edit modal and delete modal
    const showDescriptionHandler = () => {
        setShowDescription(!showDescription)
    }
    const showVideoModalHandler = () => {
        setShowVideo(!showVideo)
    }
    const showEditModalHandler = () => {
        setShowEditModal(!showEditModal)
    }
    const showDeleteModalHandler = () => {
        setShowDeleteModal(!showDeleteModal)
    }

    // Callback to the update content handler function in CourseContent
    const updateContentHandler = (e, section_id, content_id, title, description, lectureVideo) => {
        props.updateContentHandler(e, section_id, content_id, title, description, lectureVideo);
        showEditModalHandler();
    }

    const LessonButton = () => (
        <CButton
            className="float-right"
            variant="light"
            onClick={showEditModalHandler}>
            <i className="far fa-edit"></i>
        </CButton>
    )
    const ExamButton = () => (
        <Link to={"/examcontent/" + props.content_id}>
            <CButton
                className="float-right"
                variant="light">
                <i className="far fa-edit"></i>
            </CButton>
        </Link>
    )

    // Variable to show video button only if its a lecture
    let showVideoButton = (props.section_id === null || props.isExam === true) ? false : true;

    return (
        <React.Fragment>
            {showVideoButton ?
                <CButton
                    variant="light"
                    onClick={showVideoModalHandler}>
                    <i className="far fa-play-circle"></i>
                </CButton>
                : null
            }

            <CButton
                className="float-right"
                variant="light"
                onClick={showDeleteModalHandler}>
                <i className="fas fa-trash-alt"></i>
            </CButton>

            {props.isExam ? <ExamButton /> : <LessonButton />}

            <CButton
                className="float-right"
                variant="light"
                onClick={showDescriptionHandler}>
                <i className="fas fa-book"></i>
            </CButton>

            {showDescription ? <div>{props.description}</div> : null}

            <VideoPlayer
                show={showVideo}
                lectureVideo={props.lectureVideo}
                showVideoModalHandler={showVideoModalHandler} />

            <EditModal
                show={showEditModal}
                section_id={props.section_id}
                content_id={props.content_id}
                title={props.title}
                description={props.description}
                showEditModal={showEditModalHandler}
                updateContentHandler={updateContentHandler} />

            <DeleteModal
                show={showDeleteModal}
                section_id={props.section_id}
                content_id={props.content_id}
                isExam={props.isExam}
                showDeleteModal={showDeleteModalHandler}
                deleteContentHandler={props.deleteContentHandler} />
        </React.Fragment>
    )
})

export default EditButtons;