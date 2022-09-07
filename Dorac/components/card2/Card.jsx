import Link from 'next/link';
// internal imports
import { useState } from 'react';
import Modal from 'react-modal';
import useSellNft from '../../hooks/useSellNft';
import ShortenAddress from '../utils/shortenAddress';
import styles from './Card.module.css';

Modal.defaultStyles.overlay.backgroundColor = 'black';
Modal.defaultStyles.overlay.opacity = '0.8';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Card = ({ data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState('');
  const [handleSell] = useSellNft();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const {
    image,
    name,
    description,
    symbol,
    tokenAddress,
    ownerOf,
    tokenId,
    amount,
  } = data;

  const handleSellNft = async () => {
    await handleSell(tokenId, price, tokenAddress);
    closeModal();
  };

  return (
    // <Link href={'/' + tokenId}>
    <div className={`card ${styles.myCard}`}>
      <div className={styles.image}>
        <img
          src={image}
          alt="Image"
          style={{ width: '100%', height: '270px' }}
        />
      </div>
      <div className="modalDiv">
        <button
          onClick={openModal}
          className={`btn btn-primary ${styles.button33}`}
          type="button"
        >
          Sell NFT
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className={styles.modal}>
            <h3>Sell NFT</h3>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleSellNft}>Sell</button>
          </div>
        </Modal>
      </div>
      <div className="card-body">
        <div className={styles.customCB}>
          <div className={styles.cardHeader}>
            <div className={styles.headerImages}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <img src={image} alt="Image" />
                <ShortenAddress
                  address={ownerOf}
                  style={{ color: 'gray' }}
                />
              </div>
            </div>
            <span>{/* <Heart /> {0} */}</span>
          </div>
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
        <div className={styles.cardFooter}>
          <h5>{amount} ETH</h5>
          <span className={styles.custonBtn}>
            <Link href={'/' + tokenId}>Buy Now</Link>
          </span>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default Card;
