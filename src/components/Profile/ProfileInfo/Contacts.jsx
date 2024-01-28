const Contacts = (props) => {
    return (
        <div>
            <b>{props.contactTitle}:</b> {props.contactValue}
        </div>
    )
}

export default Contacts;