export function Offering(data) {
  return (
    (data && (
      <>
        {data}
        <img src={data?.image} alt="offering" className="h-20 md:h-32" />
      </>
    )) || (
      <img src="OfferingsBack.webp" alt="offering" className="h-20 md:h-32" />
    )
  );
}
