import QRGenerator from '../components/QRGenerator';
import banner from '../../public/images/qr-code-lab-netlify-app.webp';

export const meta = () => {
  return [
    { title: 'QR Code Lab | Free QR Code Generator' },
    {
      name: 'description',
      content:
        'Generate free QR codes instantly. Customize, download, and use QR codes for business, marketing, or personal needs. No registration required.',
    },
    {
      name: 'keywords',
      content:
        'free QR code generator, online QR code generator, canva QR code, canva QR code generator, the QR code generator, pdf QR code generator, adobe QR code, create QR code, qr code generator free, free online qr code generator, qr code generator transparent background, qrcodemonkey, kostenloser qr code generator, static qr code, bulk qr code generator, link shortener',
    },
    { property: 'og:title', content: 'Free QR Code Generator | Create QR Codes Online' },
    { property: 'og:description', content: 'Easily generate and customize QR codes for free. Download instantly, no sign-up required.' },
    { property: 'og:image', content: 'https://qr-code-lab.netlify.app/images/qr-preview.png' },
    { property: 'og:url', content: 'https://qr-code-lab.netlify.app/' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Free QR Code Generator' },
    { name: 'twitter:description', content: 'Generate custom QR codes instantly for free. No registration needed.' },
    { name: 'twitter:image', content: 'https://qr-code-lab.netlify.app/images/qr-preview.png' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index, follow' },
    { 'link:canonical': 'href', content: 'https://qr-code-lab.netlify.app/' },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>QR Code Lab</h1>
      <div className='banner-container'>
        <img src={banner} alt='QR Code Lab Banner' className='responsive-banner' />
      </div>
      <QRGenerator />
    </div>
  );
}
