import React, { useContext } from 'react';
import useAllClass from '../../hooks/useAllClass';
import Fade from 'react-reveal/Fade';

import SingleClass from './SingleClass';
import useTitle from '../../hooks/useTitle';

const Classes = () => {
    const [allClass] = useAllClass();
    useTitle('Classes')

    return (
        <>
            <Fade bottom>
            <section className='mt-5'>
                <div className="container w-[90%] px-6 m-auto">
                    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
                        {
                            allClass.map(classes =>
                                <SingleClass
                                key={classes._id}
                                classes={classes}
                                ></SingleClass>
                            )
                        }
                    </div>
                </div>
            </section>
            </Fade>



        </>
    );
};

export default Classes;