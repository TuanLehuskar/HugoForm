export default function MultipleChoices({ choices = [], currentChoices = [], onChoicesChange = () => {}, maxChoices = 1, style }) {
  const isExisted = (choice) => {
    const currentChoicesValue = currentChoices.map((currentChoice) => currentChoice.value);
    return currentChoicesValue.includes(choice.value);
  };

  const handleChoicesChanged = (choice) => {
    if (isExisted(choice)) {
      onChoicesChange(currentChoices);
      return;
    }

    if (currentChoices.length < maxChoices) {
      onChoicesChange([...currentChoices, choice]);
      return;
    }

    onChoicesChange([...currentChoices.slice(1), choice]);
  };

  const numberToChar = (value) => {
    const code = "A".charCodeAt(0);
    return String.fromCharCode(code + value);
  };

  return (
    <div className={`row ${style} animate__animated animate__fadeIn animate__slow`}>
      <div className="col">
        {choices.map((choice, index) => (
          <div className={`row text-${choice.theme}-light my-2`} key={choice.value}>
            <div className="col">
              <div
                className={`p-2 bg-opacity-10 border border-${choice.theme}-light _choice-${choice.theme} ${isExisted(choice) && "active"}`}
                onClick={() => handleChoicesChanged(choice)}
              >
                <div className="row align-items-center g-3">
                  <div className="col-auto">
                    <h5 className={`px-2 py-1 bg-${choice.theme} bg-opacity-10 mb-0 border border-${choice.theme}-light`}>{numberToChar(index)}</h5>
                  </div>
                  <div className="col">
                    <h5 className="mb-0">{choice.value}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
