import { useState } from "react"

const addNewBookHelper = () => {

    const initialState = {
        bookName: '',
        category: "",
        description: "",
        author: "",
        copies: "",
        status: "",
        isbn: "",
        price: "",
        image: "",
    }

    const [formValue, setFormValue] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    }

    const validate = () => {
        let newErrors = {};

        if (formValue.bookName.trim() === "") {
            newErrors.bookName = "Book name is required!";
        }
        if (formValue.category.trim() === "") {
            newErrors.category = "Book category is required!";
        }
        if (formValue.description.trim() === "") {
            newErrors.description = "Book description is required!";
        }
        if (formValue.author.trim() === "") {
            newErrors.author = "Author name is required!";
        }
        if (formValue.copies.trim() === "") {
            newErrors.copies = "Number of copies is required!";
        }
        if (formValue.status.trim() === "") {
            newErrors.status = "Status is required!";
        }
        if (formValue.isbn.trim() === "") {
            newErrors.isbn = "Status is required!";
        }
        if (formValue.status.trim() === "") {
            newErrors.price = "Price is required";
        }
        if (formValue.image.trim() === "") {
            newErrors.image = "Image file is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validate();

        if (validate) {
            // API Calling to send data to backend
            // setErrors(initialState);


            alert('Book added successful');
        } else {
            // use Toast/ popup to display error name

        }

    }

    return {
        formValue,
        errors,
        handleInputChange,
        handleSubmit,
    }

}

export default addNewBookHelper;