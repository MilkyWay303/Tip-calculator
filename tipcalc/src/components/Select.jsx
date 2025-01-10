export function Select({percent, setPercent, label}) {
    return <div className="select-percentage flex flex-col text-center">
      <label>{label}</label><select className='text-center' value={percent} onChange={(event) => {
        return setPercent(Number(event.target.value));
      } }><option value="0">Unsatysfied 0%</option><option value="30">It was ok 30%</option><option value="60">It was good 60%</option><option value="100">Absolutely amazing 100%</option></select>
    </div>;
  }
  