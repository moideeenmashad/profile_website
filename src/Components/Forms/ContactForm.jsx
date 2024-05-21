import React from 'react'

const ContactForm = () => {
    return (
        <>
            <form action="">
                <div className="row g-3">
                    <div className="col-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="" className="form-label">Message</label>
                        <textarea name="" id="" className="form-control"></textarea>
                    </div>
                </div>
                <button className="btn_primary" type='submit'>Submit</button>
            </form>
        </>
    )
}

export default ContactForm