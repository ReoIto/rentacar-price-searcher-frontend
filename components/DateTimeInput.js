export default function DateTimeInput({
  label,
  name,
  type,
  placeHolder,
  datalistName,
  handleChange,
}) {
  function datalistOptionsForHours() {
    if (datalistName !== "onlyHours") {
      return;
    }

    const hours = [
      "06",
      "07",
      "08",
      "09",
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ];

    return hours.map((hour) => {
      return <option value={`${hour}:00`} />;
    });
  }

  function datalistTag() {
    if (datalistName !== "onlyHours") {
      return;
    }

    return <datalist id={datalistName}>{datalistOptionsForHours()}</datalist>;
  }

  return (
    <>
      <label htmlFor={name} className="text-sm block">
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        className="border-b w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500"
        placeholder={placeHolder}
        list={datalistName}
        onChange={(e) => handleChange(e)}
      />

      {datalistTag()}
    </>
  );
}
