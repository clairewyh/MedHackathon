import openai
openai.api_key = 'PUT API KEY HERE'
messages = [{"role": "system", "content": "You are an intelligent assistant designed to diagnose disorders based on symptoms. "
            "A user will prompt you with a description of their symptoms, and you will provide 2-3 possible diseases, illnesses, or disorders they could have."
                                          "For each possible disorder, offer some advice or treatment tips based on the disorder"
                                          "After diagnosing them, the user may want to ask more questions about their disorder, or clarify more information."
                                          "The user already knows that you are an AI assistant and that information you provide may not be accurate, there is no need to reclarify."}]
while True: 
    message = input("User : ") 
    if message: 
        messages.append( 
            {"role": "user", "content": message}, 
        ) 
        chat = openai.ChatCompletion.create( 
            model="gpt-4", messages=messages
        ) 
    reply = chat.choices[0].message.content 
    print(f"ChatGPT: {reply}") 
    messages.append({"role": "assistant", "content": reply}) 
