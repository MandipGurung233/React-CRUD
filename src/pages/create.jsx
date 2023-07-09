import React from 'react'

export const Create = () => {
  return (
    <div className="row justify-content-center">
        <div className="col-md-4">
            <div className="card m-5">
                <div className="card-body">
                    <form action='' method='post'>
                        <div className='form-group mt-2 mb-2'>
                            <label className="form-label">BlogName: </label>
                            <input name="name" type="text" className='form-control'/>
                        </div>
                        <div className='form-group mt-2 mb-2'>
                            <label className="form-label">Description: </label>
                            <textarea name="description" type="text" className='form-control' rows='4' coloumn='4'></textarea>
                        </div>
                        <div className='form-group mt-2 mb-2'>
                            <label className="form-label">Blog Image: </label>
                            <input name="image" type="file" className='form-control'/>
                        </div>
                        <button type='submit' className='btn-btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}