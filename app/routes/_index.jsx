import QRGenerator from "../components/QRGenerator";

export const meta = () => {
  return [{ title: "QR Code Generator" }];
};

export default function Index() {
  return (
    <div>
      <h1>QR Code Generator</h1>
      <QRGenerator />
    </div>
  );
}
