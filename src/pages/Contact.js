import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Contact() {

        let pesanRef;
        
        const dispatch = useDispatch();
        const pesan = useSelector(state => state.pesan);
        
        const _handlePesan = (e) => {
            let newPesan = pesanRef.value;
           
            dispatch({
                type : 'ADD PESAN',
                pesan : newPesan
            })

            e.preventDefault();
            pesanRef.value = '';
            
        }

        return(
            <div className="App">
                <header className="App-header">                
                    {/* Ini adalah form untuk mengisis pesan yang akan ditamapilkana dalam bentuk list  */}
                    Kirimkan pesan <br />
                    <form onSubmit={_handlePesan}>
                        <table>
                            <thead></thead>
                            <tbody>                            
                            <tr>
                                <th>Pesan</th>
                                <td><input name="pesan" rows="4" cols="75" placeholder="input your message" ref={input => pesanRef = input}></input></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <input type="submit" className="btn-pesan" value="Kirim"></input>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                <div>
                    {/* ini adalah list pesan yang sudah diinputkan */}
                    <ol> 
                        {pesan.map((item, index) => <li className="ul-pesan" key={index}>{item}</li> )}
                    </ol>
                </div>                    
                </header>
            </div>
        );
    }

export default Contact;