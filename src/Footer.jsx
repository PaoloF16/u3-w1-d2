const Footer = () => {
  return (
    <p
      className="text-center m-0 py-3 fs-5"
      style={{ backgroundColor: "#368baf", color: "white" }}
    >
      All rights Reserved - {new Date().getFullYear()}
    </p>
  )
}
export default Footer
