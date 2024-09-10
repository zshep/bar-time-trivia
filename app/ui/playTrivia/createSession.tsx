'use client';

import Link from 'next/link';
import { useActionState } from 'react';

// import logic from actions.ts
import { createsession } from '../../lib/actions'



export default function CreateSession( ) {
    //use useAction state to create variable


    //grab array/list of available trvia game from backend

    return(
        <form 
            className='d-flex flex-column justify-content-center'>
            <div>
                <label
                    
                    id="game"> Select a game
                
                </label>
                <select
                    id="game"
                    name="game"
                    >
                    <br>
                        </br>
                </select>
                    <label
                        id="team_number">
                        Number of teams
                    </label>
                    <input
                        type='number'
                        name="team_number">
                    </input>

            </div>
            <div>
                <button>
                    <Link
                        href={'/'}>
                        Create Session
                    
                    </Link>
                </button>
            </div>

        </form>
    )


}

/*

<select
              id="customer"
              name="customerId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>

*/