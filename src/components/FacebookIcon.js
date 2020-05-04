import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        // padding: '0rem 2rem'
    }
}));

const FacebookIcon = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img alt="Facebook icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD/UlEQVRoge2ZQWhcRRjHf9+8bbTJ9tKaapsm0IsJCLlsUA9mTdMcdE2oCSwVo9BDqZSk4LWIsKL0KmK3VIWeUrCJbJQ1C4LETUC0IQv1ZnszTWy1tkWbFpLdvPGQLYR9b3ffzG720vyOM9833/97896bmW9ghx2ebKQeg8Tjk87fhd0vIs4RtI4AXcABIFw0WQX9J8h1RHICs9nuhQUSCbfW2DUlED32Q7tSG2Ma/Q7QZui+rGFCiSSzqdiyrQarBHrjmVa1wSdofQJosg1eZF3DJVVwP8ymh/4xdTZOIDoy87ZoPgf2mvpWkXJXcMez04NfG3kFNYycWtwVvvPXBeCksTYDBL540PrsmdyXPfmA9tWJDKWbwyH1DfB6TeqConVmdUPHc+mhR9VMVTWDyKnFXQ0VDyASCzvquxfik1W/r6oJFF+bxol/jDCwr9DyWXWzCkSHM6OCnrCJ7zhC7Gg7A70HOdwRZk+4CdkSrW8kE2gcLfLWfCp2pVx/2QSODqf2FXjqd+CZ4LI3UUo4dzbCy5H9ZW2CJgDck4LbWe4XW/YVKsjT57AQDzA40F5RvCF7taM+Ktfpm0DfSOZQcZGyYiB60NbVH+HkK/F0h19XyNdBM04NK+zhjj2eto8/vcb8r7fJ5622P02qoE4DZ0s7vDOQSCiNHrWJ8piWFu9z+ennW7biARB4Nx6fdErbPQm8+lvkJeCQdSRAifff4Lq6liEB2m7nd0c8sTxm4hypNdJ24YjqL23zzrWmx2bwbCoWuP/f/9Y5duJH4xgaHWAGcJ83HtmQP5ZXLT2ls7TFJwE5YDl6YJZWHtq6erT5rQNhn7a6srRiOwN4/s/+64AFW7cGft+DwdbBCL8ZsH48DeBBaYNPAvpWI5RY4tHmk4C60QgldujrpS0+CxmLDdFigcarzZOAwGxj5Jgj4ni0eRLIdi8sADcbosgEzdJc99VcabPfbtTVcLkhokxQXPYrRfoeaJRIEljfdlHBWXMcN+nX4ZtANhVb1nBpezUFR4v+anZqaMWvr+yZOB9yPgCMa5X1R+6qvDY7EwP8MvXaPUGf2R5RJrinKxV9q5YW+4ZnLmp4r76igiGQzE6/MV7JpmplrjX0cAzh2/rJCoaGGe43v1/NLnhx15EpRCofu+rH96sF93hdirsAufTQo9X9z72p4WLt2iojkJT7zcNBxBftzYiOZI6L1uexrNpV4A7osbnpwSkTp0AzsJX5VOxKiLUuNBeANVN/H9a06PPrIafLVDzUeMnXH0+3FQpqXGAUaDd0v4kw4ThustwiFYS6XLOSSKjea5EeR1T/ZulDOtm8tdxyzcoy6BsaFkWc2bnuq7l6XLPusMOTzv8z5ChKjVggmQAAAABJRU5ErkJggg=="/>
        </div>
    )
}

export default FacebookIcon;