
type PageHeaderProps = {
  title: string;
};

function PageHeader({ title }: PageHeaderProps) {
  return (
    <div
      style={{
        width: "100%",
        background: "#f9dce7",
        padding: "48px 24px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
        }}
      >
    
        <h1
          style={{
            margin: 0,
            fontSize: "48px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}

export default PageHeader;