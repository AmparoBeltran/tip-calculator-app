import { MainContainerStyled, Wrapper } from "./components/styles/MainContainer.styled";
import { useState, useEffect, useMemo } from "react";

export default function MainContainer() {

    const [bill, setBill] = useState(0)
    const [custom, setCustom] = useState(undefined)
    const [numPerson, setNumPerson] = useState(0)
    const [tip, setTip] = useState(0)

    useEffect(() => {
        if (tip !== 0 && custom !== 0) {
            setCustom()
        }
    }, [tip])

    useEffect(() => {
        if (custom > 0 && tip !== 0) {
            setTip(0)
        }
    }, [custom])

    const tipPerPerson = useMemo(() => {
        if (numPerson === 0) {
            return 0
        }
        const totalTip = bill * Math.max(tip, custom ?? 0) / 100
        return Math.round(totalTip / numPerson * 100) / 100
    }, [bill, tip, custom, numPerson])

    const totalPerPerson = useMemo(() => {
        if (numPerson === 0) {
            return 0
        }
        const total = bill + (tipPerPerson * numPerson)
        return Math.round(total / numPerson * 100) / 100
    }, [bill, tipPerPerson, numPerson])

    function handleReset() {
        setBill(0)
        setCustom()
        setNumPerson(0)
    }


    return (
        <Wrapper>
            <img src="/images/logo.svg" />
            <MainContainerStyled>
                <div className="inputs-wrapper">
                    <div className="bill">
                        <label htmlFor="bill">Bill</label>
                        <input
                            className="dollar"
                            type="number"
                            name="bill"
                            value={bill}
                            onChange={event => setBill(Number(event.target.value))}
                            placeholder="0"
                        />
                    </div>
                    <div className="tip">
                        <p>Tip</p>
                        <div className="grid">
                            <button
                                className={tip === 5 ? 'selected' : ''}
                                onClick={() => setTip(5)}>5%</button>
                            <button
                                className={tip === 10 ? 'selected' : ''}
                                onClick={() => setTip(10)}>10%</button>
                            <button
                                className={tip === 15 ? 'selected' : ''}
                                onClick={() => setTip(15)}>15%</button>
                            <button
                                className={tip === 25 ? 'selected' : ''}
                                onClick={() => setTip(25)}>25%</button>
                            <button
                                className={tip === 50 ? 'selected' : ''}
                                onClick={() => setTip(50)}>50%</button>

                            <input
                                type="number"
                                name="tip"
                                value={custom}
                                onChange={event => setCustom(Number(event.target.value))}
                                placeholder="Custom"
                            />
                        </div>
                    </div>
                    <div className="people">
                        <div className="label">
                            <label htmlFor="people">Number of people</label>
                            {numPerson === 0 && <small>Can't be zero</small>}
                        </div>
                        <input
                            className="person"
                            type="number"
                            min={1}
                            name="tip"
                            value={numPerson}
                            onChange={event => setNumPerson(Number(event.target.value))}
                            placeholder="0"

                        />
                    </div>
                </div>
                <div className="total">
                    <div className="tip-amount">
                        <div className="tip-person">
                            <p>Tip Amount </p>
                            <span>/ person</span>
                        </div>
                        <h3>${tipPerPerson}</h3>
                    </div>
                    <div className="total-amount">
                        <div className="total-person">
                            <p>Total</p>
                            <span>/ person</span>
                        </div>
                        <h3>${totalPerPerson}</h3>
                    </div>
                    <button onClick={handleReset} >RESET</button>
                </div>
            </MainContainerStyled>
        </Wrapper>
    )
}