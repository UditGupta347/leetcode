        double pow = 1;        double pow = 1;

        while(n != 0){        while(n != 0){
            if((n & 1) != 0){            if((n & 1) != 0){
                pow *= x;                pow *= x;
            }             }

            x *= x;            x *= x;
            n >>>= 1;            n >>>= 1;

        }        }

        return pow;        return pow;
    }    }
}}