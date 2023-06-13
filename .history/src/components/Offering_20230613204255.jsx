export function Offering({ data }) {
  return (
    <>
      {(data && (
        <img
          src={`offerings/${data?.image}`}
          alt="offering"
          className="h-20 md:h-32 hover:opacity-70"
        />
      )) || (
        <img
          src="OfferingsBack.webp"
          alt="offering"
          className="h-20 md:h-32 hover:opacity-70"
        />
      )}
    </>
  );
}
