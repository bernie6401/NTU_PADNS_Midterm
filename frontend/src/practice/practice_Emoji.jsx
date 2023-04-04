function Emoji({ symbol })
{
    const emojiUrl = symbol === 'seal'
      ? 'https://em-content.zobj.net/thumbs/240/google/350/seal_1f9ad.png'
      : symbol === 'shark'
        ? 'https://em-content.zobj.net/thumbs/240/google/350/shark_1f988.png'
        : ''
    return (
      <img src={emojiUrl} alt={symbol} style={{ width: '2rem' }} />
    )
}
export default Emoji
  