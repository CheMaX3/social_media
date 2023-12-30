import classes from "./FormsContols.module.css";

export const FormControl = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={`${classes.formControl} ${hasError && classes.error}`}>
            <props.child {...props} {...input} {...meta} />
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};