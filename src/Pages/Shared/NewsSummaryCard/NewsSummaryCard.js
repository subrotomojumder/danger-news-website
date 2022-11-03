import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
    const { image_url, details, author, total_view, title, _id, rating } = news;
    return (
        <div>
            <Card className='mb-4'>
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center'>
                        <Image roundedCircle style={{height: '50px'}} src={author.img}></Image>
                        <div className='ms-3'>
                            <p className='mb-1'>{author.name || 'N/a'}</p>
                            <p className='mb-1'>{author.published_date || 'N/a'}</p>
                        </div>
                    </div>
                    <div>
                        
                        <h3 className='d-inline me-2'><FaRegBookmark></FaRegBookmark></h3>
                        <h3 className='d-inline'><FaShareAlt></FaShareAlt></h3>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length > 200 ?
                            <>{details.slice(0, 200) + '....'} <Link to={`/news/${_id}`}>Read more</Link> </>
                            : details
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div>
                        <FaRegStar className='text-warning me-2'></FaRegStar>
                        {rating?.number}
                    </div>
                    <div>
                        <FaEye className='me-2'></FaEye>
                        {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;