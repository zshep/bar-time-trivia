'use client';

import Link from 'next/link';
import { useActionState } from 'react';

// import logic from actions.ts
import { createsession } from '../../lib/actions'



export default function CreateSession() {
    //use useAction state to create variable


    //grab array/list of available trvia game from backend

    return (
        <form>
            <div className='d-flex flex-column'>
            <div>
                <label

                    id="game"> Select a game

                </label>
                <select
                    id="game"
                    name="game"
                >
                </select>
            </div>
            <div className='d-flex flex-column'>
                <label
                    id="team_number">
                    Number of teams
                </label>
                
                <input
                    type='number'
                    name="team_number"
                    min={2}
                    max={8}>
                </input>

            </div>
            </div>
            <div className='mt-4'>
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