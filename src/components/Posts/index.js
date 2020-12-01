import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchUsers } from "../../redux/action";

const Posts = function() {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return(
        <section className="post-item">
            {
                users.map((el) => {
                    return (
                        <div key={ el.id } >
                            <h3>{ el.name }</h3>
                        </div>
                    )
                })
            }
        </section>
    )

}

Posts.fetching = ({dispatch, path}) => {
    console.log('PATH', path);
    return [dispatch(fetchUsers())];
};

export default Posts;