function child(props){

    return(
        <div className={props.className}>
            <p>Name: {props.name}</p>
        </div>
    );
}

export default child 