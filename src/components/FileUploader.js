import React, {useRef} from 'react'

const FileUploader = ({onFileSelect}) =>{
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        //handle validations?
        const file= e.target.files[0]
        onFileSelect(file)

    }
    // https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react
    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} />
            <button onClick= {e => fileInput.current && fileInput.current.click()} className="btn btn-primary"/>
        </div>
    )
}

export default FileUploader