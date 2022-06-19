import React from 'react'


type ArrProps = {
    names: {
        firstName: string
        lastName: string
    }[]
}

const ArrayProps = (props: ArrProps) => {
  return (
    <div>
        {props.names.map((item) => {
            return (
                <h2 key={item.firstName}>
                    {item.firstName} {item.lastName}
                </h2>
            )
        })}
    </div>
  )
}

export default ArrayProps
