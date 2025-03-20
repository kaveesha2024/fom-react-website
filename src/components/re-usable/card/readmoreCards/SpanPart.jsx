const SpanPart = ({para, span}) => {
    return (
        <p style={{
            textDecoration: "none",
            textAlign: "justify",
            fontWeight: 600,
            fontSize: "15px",
            marginLeft: "3%",
        }}>
            {para}{" "}
            <span style={{
                textDecoration: "none",
                textAlign: "justify",
                fontWeight: 500,
                // marginLeft: "",
            }}>{span}</span>
        </p>
    );
};

export default SpanPart;