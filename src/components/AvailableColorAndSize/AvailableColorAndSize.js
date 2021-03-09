import React from 'react'

export default function AvailableColorAndSize({colorList, sizeList}) {
    return (
        <form>
        <fieldset>
            <legend>Colours</legend>
            <ul>
                {colorList.map( color => 
                        <li>
                            <label><input type="radio" name="colour" value="{color.value}" /> {color.name}</label>
                        </li>
                )}
            </ul>
        </fieldset>
        <fieldset>
            <legend>Sizes</legend>
            <ol>
                {sizeList.map( size => 
                        <li>
                            <label><input type="radio" name="size" value="{size.value}" /> {size.name}</label>
                        </li>
                )}
            </ol>
        </fieldset>
        </form>
    )
}
