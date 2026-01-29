        double pow = 1;        

        while(n != 0){      
            if((n & 1) != 0){            
                pow *= x;                
            }             

            x *= x;           
            n >>>= 1;            

        }        

        return pow;        
    }    
}
