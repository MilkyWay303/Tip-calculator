export function BillInput({value, setValue, label}) {
    return <div className="bill-input flex flex-col text-center">
      <label>{label}</label>
      <input className='text-center' value={value} placeholder='price' onChange={(event) => {
        console.log(event.target.value);
        return setValue(Number(event.target.value));
      } } />
    </div>;
  }