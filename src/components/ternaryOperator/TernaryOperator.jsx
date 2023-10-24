import React from 'react'

function TernaryOperator(props) {
    var auth = true;

    function showLeader() {
        var leader = document.getElementById('leader');
        if (leader !== null) {
            if (auth) {
                leader.innerHTML = "Muhammad Omar";
                auth = false;
            } else {
                leader.innerHTML = "Belal Omar";
                auth = true;
            }
        }
    }

    function showLeader2() {
        var leader = document.getElementById('leader');
        if (leader !== null) {
            if (auth) {
                leader.innerHTML = "Muhammad Omar2";
                auth = !auth;
            } else {
                leader.innerHTML = "Belal Omar2";
                auth = !auth;
            }
        }
    }

    // Ternary Operator = If Else
    function showLeader3() {
        var leader = document.getElementById('leader');
        if (leader !== null) {
            leader.innerHTML = auth ? "Muhammad Omar3" : "Belal Omar3";
            auth = !auth;
        }
    }
    // && Operator = if
    function showLeader4() {
        var leader = document.getElementById('leader');
        if (leader !== null) {
            leader.innerHTML = auth && "Muhammad Omar4";
        }
    }

    return (
        <>
            <h1 id='leader'>The Leader</h1>
            <button onClick={() => { showLeader() }}>Click Here</button>
            <button onClick={() => { showLeader2() }}>Click Here</button>
            <button onClick={() => { showLeader3() }}>Click Here</button>
            <button onClick={() => { showLeader4() }}>Click Here</button>
        </>
    )
}
export default TernaryOperator