import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const { image_url, details, author, total_view, title, category_id, rating } = news;
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>

                <Card.Header className="text-muted d-flex justify-content-between">
                    <div>
                        <FaRegStar className='text-warning me-2'></FaRegStar>
                        {rating?.number}
                    </div>
                    <div>
                        <FaEye className='me-2'></FaEye>
                        {total_view}
                    </div>
                </Card.Header>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div>
                        <h3 className='d-inline me-2'><FaRegBookmark></FaRegBookmark></h3>
                        <h3 className='d-inline'><FaShareAlt></FaShareAlt></h3>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Image roundedCircle style={{ height: '50px' }} src={author.img}></Image>
                        <div className='ms-3'>
                            <p className='mb-1'>{author.name || 'N/a'}</p>
                            <p className='mb-1'>{author.published_date || 'N/a'}</p>
                        </div>
                    </div>
                    <Link to={`/category/${category_id}`}>
                        <Button>All news this in this categories 🛹</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default News;