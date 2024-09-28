
    const insert = document.getElementById('insert');
    window.addEventListener('keydown',function(event){
        console.log('event login',event.key);
        
        insert.innerHTML = `
        <div>
            <table>
        <tr>
            <th>key</th>
            <th>keyCode</th>
            <th>code</th>
        </tr>
        <tr>
            <th>${event.key}</th>
            <th>${event.keyCode}</th>
            <th>${event.code}</th>
        </tr>
        </table>
        </div>
        `;
    })
